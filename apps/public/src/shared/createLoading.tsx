import { Skeleton } from '@shadcn/skeleton';

interface CreateLoadingProps {
  width: number;
  height: number;
}

const CreateLoading = ({ width, height }: CreateLoadingProps) => {
  return function Loading() {
    return (
      <Skeleton
        style={{ width: width, height: height }}
        className='rounded-md bg-background'
      />
    );
  };
};

export { CreateLoading };
