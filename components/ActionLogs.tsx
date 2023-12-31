import Icon from '@/components/Icon';
import { useEffect, useState } from 'react';
import { Action } from '../app/(pages)/voting/page';

interface ActionLogsProps {
  action: Action | null;
}

const typeDetails = {
  Likes: { text: 'was added to Likes', icon: 'like', iconColor: 'text-green' },
  Dislikes: {
    text: 'was added to Dislikes',
    icon: 'dislike',
    iconColor: 'text-orange'
  },
  FavAdd: {
    text: 'was added to Favourites',
    icon: 'fav',
    iconColor: 'text-red'
  },
  FavRemove: { text: 'was removed from Favourites', icon: '', iconColor: '' }
};

const ActionLogs = ({ action }: ActionLogsProps) => {
  const [actions, setActions] = useState<Action[]>([]);

  useEffect(() => {
    if (!action) return;
    setActions((prev) => [action, ...prev]);
  }, [action]);

  return (
    !!actions.length && (
      <div className=" flex-1 flex flex-col gap-2.5">
        {actions.map(({ type, date, imgId }, index) => {
          const hours =
            date.getHours() > 9 ? date.getHours() : '0' + date.getHours();
          const minutes =
            date.getMinutes() > 9 ? date.getMinutes() : '0' + date.getMinutes();
          const time = `${hours}:${minutes}`;

          return (
            <div
              key={index}
              className="p-[15px] pr-5 flex gap-5 items-center bg-grey-light rounded-[10px]"
            >
              <span className="px-2.5 py-[3px] rounded-[5px] bg-white">
                {time}
              </span>
              <span className="flex-1 text-grey">
                Image ID:{' '}
                <span className="text-black font-medium">{imgId}</span>
                {typeDetails[type].text}
              </span>
              <Icon
                icon={typeDetails[type].icon}
                size={20}
                className={typeDetails[type].iconColor}
              />
            </div>
          );
        })}
      </div>
    )
  );
};

export default ActionLogs;
