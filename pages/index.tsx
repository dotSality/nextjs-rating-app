import { Button, Input, Paragraph, Rating, Tag, Textarea, TitleComponent } from '../components';
import { useState } from 'react';
import { withLayout } from '../hoc/withLayout';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';

export default withLayout(({ menu, firstCategory }: HomeProps): JSX.Element => {
  const [rating, setRating] = useState(4);
  return (
    <>
      <TitleComponent tag="h1">Title</TitleComponent>
      <Button appearance="primary" arrow="down">Primary</Button>
      <Button appearance="ghost" arrow="right">Ghost</Button>
      <Paragraph font="small">Small Small Small Small Small Small Small Small Small Small </Paragraph>
      <Paragraph font="medium">Medium Medium Medium Medium Medium Medium Medium Medium Medium Medium </Paragraph>
      <Paragraph font="large">Large Large Large Large Large Large Large Large Large Large </Paragraph>
      <Tag size="medium" color="ghost">Ghost</Tag>
      <Tag color="primary">primary</Tag>
      <Tag size="small" color="primary">Primary</Tag>
      <Tag size="medium" color="red">Red</Tag>
      <Tag size="small" color="green">Green</Tag>
      <Tag color="green">Green</Tag>
      <Tag color="primary">Primary</Tag>
      <Rating currentRating={rating} onRatingChange={setRating} isEditable/>
      <Rating currentRating={2}/>
      <Input placeholder="test"/>
      <Textarea placeholder="test"/>
    </>
  );
});

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;

  const url = process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find';

  const { data: menu } = await axios.post<MenuItem[]>(url, { firstCategory });

  return {
    props: { menu, firstCategory }
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}