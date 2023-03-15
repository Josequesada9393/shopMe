import { Fragment } from 'react';
import CategoryPreview from '../../components/categoryPreview/CategoryPreview';
import { selectCategories } from '../../store/categories/category.selector';
import { useSelector } from 'react-redux';

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategories)
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