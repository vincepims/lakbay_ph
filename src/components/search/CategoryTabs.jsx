import { Building2, Landmark, Mountain, Palmtree, Sparkles, Waves } from 'lucide-react';
import { categories } from '../../data/marketplaceData';
import { useMarketplace } from '../../context/MarketplaceContext';

const icons = { Sparkles, Waves, Palmtree, Pool: Waves, Mountain, Building2, Landmark };

export function CategoryTabs() {
  const { filters, updateFilters } = useMarketplace();
  return <div className="category-tabs">{categories.map((category) => { const Icon = icons[category.icon]; return <button className={filters.category === category.id ? 'active' : ''} key={category.id} onClick={() => updateFilters({ category: category.id })}><Icon /><span>{category.label}</span></button>; })}</div>;
}
