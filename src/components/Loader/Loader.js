import { ThreeCircles } from 'react-loader-spinner';
import { CenteredLoader } from './Loader.styled';
export const Loader = () => (
  <CenteredLoader>
    <ThreeCircles
      height="170"
      width="170"
      color="#3f51b5"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="three-circles-rotating"
      outerCircleColor=""
      innerCircleColor=""
      middleCircleColor=""
    />
  </CenteredLoader>
);