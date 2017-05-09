let index = 0;

export const getName = () => {
  names = [
    'Dolores Abernathy',
    'Maeve Millay',
    'Bernard Lowe',
    'Robert Ford',
    'Teddy Flood',
    'Armistice',
    'Ashley Stubbs',
    'Theresa Cullen',
    'Lee Sizemore',
    'Hector Escaton',
    'Clementine Pennyfeather',
    'Elsie Hughes',
    'William',
    'Logan',
    'Lawrence',
    'Charlotte Hale',
  ];

  const name = names[index];

  index = (index + 1) % names.length;

  return name;
};
