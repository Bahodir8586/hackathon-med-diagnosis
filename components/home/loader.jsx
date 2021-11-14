import Loader from 'react-loader-spinner';

export default function LoaderComponent() {
  return (
    <div className="flex justify-center items-center">
      <Loader
        type="Grid"
        color="#60A5FA"
        height={150}
        width={150}
        timeout={0} //3 secs
      />
    </div>
  );
}
