import React from 'react';
import { flattenValues } from '@uniformdev/canvas';
import { contentClient } from '../../../lib/canvas';
import { Card } from 'react-daisyui';
import Grid from '../../../components/Grid';

const RecipesPage = ({ recipes }) => {
  return (
    <div className="container mx-auto mb-16">
      <h1 className="font-serif font-bold text-5xl mb-16">Recipes Page</h1>
      <Grid columns={3} className="mt-8">
        {recipes.map(({ entry }) => {
          const recipeValues = flattenValues(entry);
          const { name, featuredImage, subTitle, difficulty, ratingValue } =
            recipeValues;
          const image = featuredImage.length > 0 ? featuredImage[0] : null;
          return (
            <Card
              key={entry._id}
              className="bg-white hover:-translate-y-2 transition-transform ease-in-out delay-150 duration-300"
            >
              {image && <Card.Image src={image.url} alt={name} />}
              <Card.Body>
                <Card.Title
                  tag="h4"
                  className="text-xl hover:underline hover:underline-offset-1 capitalize"
                >
                  {name}
                </Card.Title>

                {subTitle && <p>{subTitle}</p>}
                {difficulty && <p>Difficulty: {difficulty}</p>}
                {ratingValue && <p>Rating: {ratingValue}/5</p>}
              </Card.Body>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
};

export async function getStaticProps() {
  // Fetch data from Content API
  const recipes = await contentClient
    .getEntries({
      filters: {
        type: { eq: 'recipe' },
        'fields.difficulty': { in: ['easy', 'medium'] },
      },
      search: 'pizza',
      skipDataResolution: true,
      limit: 20,
      orderBy: 'fields.ratingValue_DESC',
    })
    .then(recipes => {
      return recipes.entries;
    });

  return {
    props: {
      recipes,
    },
  };
}

export default RecipesPage;
