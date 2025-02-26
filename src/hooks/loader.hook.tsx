import { setLoader } from '@src/redux/app.slice';
import { useAppDispatch, useAppSelector } from '@src/redux/store.hooks';

export const useLoader = () => {
  const dispatch = useAppDispatch();
  const loader = useAppSelector(state => state.app.loader);
  const loaderText = useAppSelector(state => state.app.loaderText);
  const loaderExtraText = useAppSelector(state => state.app.loaderExtraText);
  const verifiedLoader = useAppSelector(state => state.app.verifiedLoader);

  const setLoaderData = (
    status: boolean,
    text: string = '',
    verified?: boolean,
    extraText: string = '',
  ) => {

    dispatch(
      setLoader({
        loader: status,
        loaderText: text,
        verifiedLoader: verified,
        loaderExtraText: extraText,
      }),
    );
  };

  return {
    loader,
    loaderText,
    verifiedLoader,
    loaderExtraText,
    setLoader: setLoaderData,
  };
};
