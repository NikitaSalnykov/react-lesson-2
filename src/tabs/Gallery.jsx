import { Component } from 'react';

import * as ImageService from 'service/image-service';
import { Button, SearchForm, Grid, GridItem, Text, CardItem } from 'components';

export class Gallery extends Component {
  state = {
    photos: [],
    value: '',
    page: 1,
    loadMore: false,
  };

  componentDidUpdate(_, prevState) {
    const { value, page } = this.state;
    const fetchData = async () => {
      const {
        photos,
        total_results,
        per_page,
        page: currentPage,
      } = await ImageService.getImages(value, page);
      this.setState(prevState => ({
        photos: [...prevState.photos, ...photos],
        loadMore: currentPage < Math.ceil(total_results / per_page),
      }));
    };

    if (prevState.value !== value || prevState.page !== page) {
      fetchData();
    }
  }

  handleSubmit = value => {
    this.setState({ value, page: 1, photos: [] });
  };

  loadMorePhotos = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    console.log(this.state.photos);
    const { photos, loadMore } = this.state;
    return (
      <>
        <SearchForm handleSubmit={this.handleSubmit} />
        <Grid>
          {photos.map(({ id, avg_color, alt, src }) => (
            <GridItem key={id}>
              <CardItem color={avg_color}>
                <img src={src.large} alt={alt} />
              </CardItem>
            </GridItem>
          ))}
        </Grid>
        {loadMore && <Button onClick={this.loadMorePhotos}>Load More</Button>}
        {photos.length === 0 && (
          <Text textAlign="center">Sorry. There are no images ... 😭</Text>
        )}
      </>
    );
  }
}
