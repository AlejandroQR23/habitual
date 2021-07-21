export interface IColorCard {
  text: string;
  color: string;
  img?: string;
}

export const colorCards: IColorCard[] = [
  { text: 'Shopping habits and interests', color: '#FE8668' },
  { text: "Today's trending items", color: '#30D6B0' },
  { text: 'Incoming! Flash hot deals', color: '#4269F2' },
  { text: 'Browse our new categories', color: '#FDBC1F' },
];

export const categoryCards: IColorCard[] = [
  { text: 'Electronics', color: '#FE8668', img: '../../assets/bose-headset.png' },
  { text: 'Gaming', color: '#30D6B0', img: '../../assets/bose-headset.png' },
  { text: 'Fashion', color: '#4269F2', img: '../../assets/bose-headset.png' },
  { text: 'Education', color: '#FDBC1F', img: '../../assets/bose-headset.png' },
  { text: 'Music', color: '#FE8668', img: '../../assets/bose-headset.png' },
];
