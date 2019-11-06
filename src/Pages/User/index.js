import React, {Component} from 'react';
import Proptypes from 'prop-types';
import api from '../../services/api';
import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Loading,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

export default class User extends Component {
  static navigationOptions = ({navigation}) => ({
    title: navigation.getParam('user').name,
  });

  state = {
    stars: [],
    loading: null,
  };

  async componentDidMount() {
    this.setState({loading: true});
    const {navigation} = this.props;
    const user = navigation.getParam('user');

    const response = await api.get(`users/${user.login}/starred`);

    this.setState({stars: response.data, loading: false});
  }

  handleNavigate = repository => {
    const {navigation} = this.props;
    const repositoryUrl = repository.html_url;
    const repositoryName = repository.name;
    navigation.navigate('Repository', {repositoryUrl, repositoryName});
  };

  render() {
    const {navigation} = this.props;
    const {stars, loading} = this.state;
    const user = navigation.getParam('user');
    return (
      <Container>
        <Header>
          <Avatar source={{uri: user.avatar}} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>
        {loading ? (
          <Loading />
        ) : (
          <Stars
            data={stars}
            keyExtractor={star => String(star.id)}
            renderItem={({item}) => (
              <Starred onPress={() => this.handleNavigate(item)}>
                <OwnerAvatar source={{uri: item.owner.avatar_url}} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
          />
        )}
      </Container>
    );
  }
}

User.propTypes = {
  navigation: Proptypes.shape({
    getParam: Proptypes.func,
  }).isRequired,
};
