import { memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleList } from 'entities/Article';
import { ArticleView } from 'entities/Article/model/types/article';

import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
  className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
  const { className } = props;

  return (
    <div className={classNames(cls.ArticlesPage, {}, [className])}>
      <ArticleList view={ArticleView.BIG} articles={[]} />
    </div>
  );
};

export default memo(ArticlesPage);
