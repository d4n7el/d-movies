export interface Props {
  title: string;
  subTitle?: string;
}

export const TitleComponent = ({ title, subTitle }: Props) => {
  return (
    <div className='border-r-4 border-boston-blue-500 pr-5 py-1'>
      <p className='text-xl text-right text-boston-blue-500'>{title}</p>
      <pre className='tracking-wide text-sm text-right text-boston-blue-100/45'>
        {subTitle}
      </pre>
    </div>
  );
};
