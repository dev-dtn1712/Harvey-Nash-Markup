import { CARD_DATA } from '../../constants/data';
import Card from '../../components/Card';

const CardList = () => {
  return CARD_DATA.map(data => <Card key={data.img} item={data} />);
};

export default CardList;