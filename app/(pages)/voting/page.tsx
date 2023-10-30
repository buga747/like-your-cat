'use client';

import BackNav from '@/components/BackNav';
import useRandomCat from '@/hooks/useRandomCat';
import ActionLogs from '../../../components/ActionLogs';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import BtnGroup from './BtnGroup';
import Loader from '@/components/Loader';

export type ActionType = 'Likes' | 'Dislikes' | 'FavAdd' | 'FavRemove';

export interface Action {
  type: ActionType;
  date: Date;
  imgId: string;
}

const Voting = () => {
  const [action, setAction] = useState<Action | null>(null);
  const [request, setRequest] = useState('');
  const { cat, loading, error } = useRandomCat(request);

  useEffect(() => {
    console.log(loading);
  }, [request]);

  if (error) throw new Error('Failed to fetch data');

  return (
    <div className="h-full flex flex-col">
      <div className="mb-5">
        <BackNav pageTitle="voting" />
      </div>
      <div className="relative mb-14">
        <div>
          <div className="relative overflow-hidden aspect-[1.8] rounded-[20px]">
            {loading ? (
              <Loader />
            ) : (
              cat && (
                <Image
                  src={cat.url}
                  fill
                  alt="Cat"
                  sizes="(max-width: 768px) 100%, 100%"
                  priority
                  className="object-cover"
                />
              )
            )}
          </div>
          <div className="absolute -bottom-[44px] left-2/4 -translate-x-1/2">
            {cat && (
              <BtnGroup
                imgId={cat?.id}
                setAction={setAction}
                setRequest={setRequest}
              />
            )}
          </div>
        </div>
      </div>
      <ActionLogs action={action} />
    </div>
  );
};

export default Voting;
