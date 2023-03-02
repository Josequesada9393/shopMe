import { useContext, Fragment } from 'react';
import CategoryPreview from '../../components/categoryPreview/CategoryPreview';
import { CategoriesContext } from '../../context/CategoriesContext';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;