import {json, useRouteError} from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

import PageContent from '../components/PageContent';

function ErrorPage() {
    const error = useRouteError();
    console.log(error);
    let title = 'An error occurred!';
    let message = 'somthing went wrong!';

    if (error.status === 500) {
        message = json.parse(error.data).message;
    }

    if (error.status === 404) {
        title = 'Not found!';
        message = 'Could not found resource or page!';
    }

    return (
        <>
          <MainNavigation />
          <PageContent title={title}>
            <p>{message}</p>
          </PageContent>
        </>
    );
}

export default ErrorPage;