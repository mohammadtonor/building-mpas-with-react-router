// import { useEffect,useState } from 'react';
import { json, useLoaderData } from 'react-router-dom';



import EventsList from '../components/EventsList';

 function EventsPage() {
  const data = useLoaderData();
  const events = data.events;
/*  const [isLoading, setIsLoading] = useState(false);
  const [fetchedEvents, setFetchedEvents] = useState();
  const [error,setError] = useState();

  useEffect(() => {
    async function fetchEvents() {
      setIsLoading(true);
      const response =  await fetch('http://localhost:8080/events');
      if (!response.ok) {
        setError('Fetching Data With an Error!!')
      }else {
        const resData = await response.json();
        setFetchedEvents(resData.events);
      }
      setIsLoading(false);  
    }

    fetchEvents();
  },[]); */

  return <EventsList events={events}/>
    // <>
    //   <div style={{textAlign: 'center'}}>
    //     {isLoading && <p>Loading...</p>}
    //     {error && <p>{error}</p>}
    //   </div>  
    //   {!isLoading && fetchedEvents && <EventsList events={fetchedEvents} />}
    // </>
  
}

export default EventsPage;

export async function loader() {
  const response = await fetch('http://localhost:8080/events');
  if (!response.ok) {
    //throw new Response(json.strigify({messsage:'could not fetch events'}),{ status: 500})
    throw json({messsage:'could not fetch events ', status: 500}) ; 
  }else {
    return response;
  }
}

