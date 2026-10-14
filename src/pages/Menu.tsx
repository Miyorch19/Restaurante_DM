import { useState } from 'react';
import { menuItems, restaurantInfo } from '../data/mock';
import type { MenuItem } from '../types';

const CATEGORY_ORDER = ['Aperitivos', 'Ensaladas', 'Parrilla', 'Pastas', 'Postres', 'Bebidas'];

function MenuCard({ item }: { item: MenuItem }) {
  return (
    <div className="flex flex-col">
      <div className="bg-accent pb-2">
        <div className="aspect-[3/3.2] bg-neutral-300 w-full overflow-hidden">
          {(item.imagenMenu || item.imagenes[0]) && (
            <img
              src={item.imagenMenu || item.imagenes[0]}
              alt={item.nombre}
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </div>

      <div className="pt-3 flex flex-col items-center text-center">
        <p className="font-mono font-semibold text-sm text-accent leading-tight">
          {item.nombre}
        </p>
        <div className="border-b-2 border-dashed border-accent my-2 w-full"></div>
        <p className="font-mono font-semibold text-xs text-accent leading-snug">
          {item.descripcion}
        </p>
      </div>
    </div>
  );
}

function CategoryBlock({ category, items }: { category: string; items: MenuItem[] }) {
  const [offset, setOffset] = useState(0);
  const handlePrev = () => {
    if (offset > 0) setOffset(offset - 1);
  };

  const handleNext = () => {
    if (offset + 3 < items.length) setOffset(offset + 1);
  };

  const hasPrev = offset > 0;
  const hasNext = offset + 3 < items.length;

  return (
    <div>
      <div className="border-t-2 border-dashed border-accent mb-8"></div>

      <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr] gap-8">

        <div className="flex flex-col gap-4 pt-1">
          <h2 className="font-serif italic text-accent leading-none" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>
            /{category}/
          </h2>
          <div className="hidden sm:flex gap-0">
            <button
              onClick={handlePrev}
              disabled={!hasPrev}
              className={`w-9 h-9 border border-accent font-mono text-sm font-black flex items-center justify-center transition-colors ${
                hasPrev 
                  ? 'text-accent hover:bg-accent hover:text-cream cursor-pointer' 
                  : 'text-accent/30 border-accent/30 cursor-not-allowed'
              }`}
              aria-label="Anterior"
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              disabled={!hasNext}
              className={`w-9 h-9 border border-accent border-l-0 font-mono text-sm font-black flex items-center justify-center transition-colors ${
                hasNext 
                  ? 'text-accent hover:bg-accent hover:text-cream cursor-pointer' 
                  : 'text-accent/30 border-accent/30 cursor-not-allowed'
              }`}
              aria-label="Siguiente"
            >
              &gt;
            </button>
          </div>
        </div>

        <div className="overflow-x-auto sm:overflow-hidden w-full snap-x snap-mandatory sm:snap-none pb-4 sm:pb-0">
          <div 
            className="flex transition-transform duration-500 ease-in-out -mx-2 sm:[transform:var(--desktop-transform,none)]"
            style={{ '--desktop-transform': `translateX(calc(-${offset} * (100% / 3)))` } as React.CSSProperties}
          >
            {items.map((item) => (
              <div key={item.id} className="w-[85vw] sm:w-1/3 flex-shrink-0 px-2 snap-center sm:snap-none">
                <MenuCard item={item} />
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="mt-8"></div>
    </div>
  );
}

export default function Menu() {
  const grouped = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    items: menuItems.filter((item) => item.categoria === cat),
  })).filter((group) => group.items.length > 0);

  return (
    <div className="bg-cream min-h-screen font-mono">
      <header className="pt-12 pb-12 px-4 sm:px-8 lg:px-16 text-center">
        <h1 className="font-serif text-accent leading-none mb-6"
          style={{ fontSize: 'clamp(4rem, 10vw, 9rem)' }}
        >
          Nuestro Menú
        </h1>
        <p className="font-mono text-sm font-semibold text-accent max-w-xl mx-auto leading-relaxed">
          Cada platillo está elaborado con ingredientes de calidad y el sabor que distingue a {restaurantInfo.nombrePrincipal}.
        </p>
      </header>

      <div className="px-4 sm:px-8 lg:px-16 pb-16">
        {grouped.map(({ category, items }) => (
          <CategoryBlock key={category} category={category} items={items} />
        ))}
      </div>
    </div>
  );
}
