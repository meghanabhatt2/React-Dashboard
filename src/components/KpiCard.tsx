


import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import { RootState } from '../store/store';
import { updateKpiCards } from '../slice/chartSlice';

const KpiCard: React.FC = () => {
  const kpiCards = useSelector((state: RootState) => state.charts.kpiCards);
  const dispatch = useDispatch();

  // Load the saved kpiCards from localStorage when the component is mounted
  useEffect(() => {
    const savedCards = localStorage.getItem('kpiCards');
    if (savedCards) {
      dispatch(updateKpiCards(JSON.parse(savedCards))); // Dispatch saved cards to Redux
    }
  }, [dispatch]);
// Inside moveCard function
const moveCard = (dragIndex: number, hoverIndex: number) => {
  const updatedCards = [...kpiCards];
  const [draggedCard] = updatedCards.splice(dragIndex, 1);
  updatedCards.splice(hoverIndex, 0, draggedCard);
  dispatch(updateKpiCards(updatedCards)); // Dispatch updated cards to Redux
};
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {kpiCards.map((card, index) => (
        <DraggableCard
          key={card.id}
          index={index}
          card={card}
          moveCard={moveCard}
        />
      ))}
    </div>
  );
};

interface DraggableCardProps {
  card: {
    id: string;
    title: string;
    value: string;
    description: string;
  };
  index: number;
  moveCard: (dragIndex: number, hoverIndex: number) => void;
}

const DraggableCard: React.FC<DraggableCardProps> = ({ card, index, moveCard }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  const [, drag] = useDrag(() => ({
    type: 'CARD',
    item: { index },
  }));

  const [, drop] = useDrop(() => ({
    accept: 'CARD',
    hover: (item: { index: number }) => {
      if (!ref.current) return;
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) return;

      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex; // Update the drag item's index
    },
  }));

  drag(drop(ref)); // Connect drag and drop to the card

  return (
    <div
      ref={ref}
      className="text-white bg-gray-600 p-4 rounded-lg hover:shadow-lg transition-shadow duration-200"
    >
      <h3 className="text-lg font-semibold text-white">{card.title}</h3>
      <p className="text-2xl font-bold text-[#60A5FA] my-2">{card.value}</p>
      <p className="text-sm text-sky-200">{card.description}</p>
    </div>
  );
};

export default KpiCard;

