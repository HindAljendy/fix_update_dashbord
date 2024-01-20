import {  Route , Routes  } from 'react-router-dom';
import './App.css';
import Blogs from './pages/Blogs/Blogs';
import Booking from './pages/Booking/Booking';
import Explore from './pages/Explore/Explore'; 
import Food from './pages/Food/Food';
import Inbox from './pages/Inbox/Inbox';
import NewArticle from './componnents/NewArticle/NewArticle';
import EditArticle from './componnents/EditArticle/EditArticle';
import PopUp from './componnents/PopUp/PopUp';
import Sidebar from './componnents/Sidebar/Sidebar';
import DeletedArticles from './componnents/DeletedArticles/DeletedArticles';
import DetailsArticles from './componnents/DetailsArticles/DetailsArticles';
import Restaurant from './pages/Explore/Restaurant/Restaurant';
import Chalet from './pages/Explore/Chalet/Chalet';
import Activity from './pages/Explore/Activity/Activity';
import Nature from './pages/Explore/Nature/Nature';
import Pool from './pages/Explore/Pool/Pool';
import Events from './pages/Explore/Events/Events';
import GalleryDash from './pages/GalleryDash/GalleryDash';
import Rooms from './pages/Rooms/Rooms';
import NewFood from './componnents/NewFood/NewFood';
import ActivityGallery from './pages/GalleryDash/Activity/ActivityGallery';
import RestaurantGallery from './pages/GalleryDash/Restaurant/RestaurantGallery';
import ChaletGallery from './pages/GalleryDash/Chalet/ChaletGallery';
import NatureGallery from './pages/GalleryDash/Nature/NatureGallery';
import EventsGallery from './pages/GalleryDash/Events/EventsGallery';
import ADNewRoom from './componnents/AD_NewRoom/ADNewRoom';
import ADDeletedRooms from './componnents/AD_DeletedRooms/ADDeletedRooms';
import NewArticleExplore from './componnents/NewArticle_Explore/NewArticleExplore';
import WesternFood from './pages/Food/Western_Food/WesternFood';
import OrientalFood from './pages/Food/Oriental_Food/OrientalFood';
import TraditionalFood from './pages/Food/Tranditional_Food/TraditionalFood';
import PopUpRoom from './componnents/popupRoom/PopUpRoom';
import PopUpExplore from './componnents/popupExplore/PopUpExplore';
import PopUpFood from './componnents/PopupFood/PopUpFood';





function App() {
  return (
      <div className='App'>
        <Sidebar/>
        {/* Routes the pages */}
        <Routes>
          {/* Routes of the Blogs page */}
          <Route path='/' element={< Blogs />}/>
          <Route path='/new' element={< NewArticle />}/>
          <Route path='/edit_article' element={< EditArticle />}/>
          <Route path='/delete_article' element={< DeletedArticles />}/>
          <Route path='/pop_up' element={< PopUp />}/>
          <Route path='/details_article' element={< DetailsArticles />}/>
          <Route path='/gallery' element={< GalleryDash />}/>

            {/* Routes of the Gallery page */}
          <Route path='/gallery' element={< GalleryDash />}>
            <Route index element={< RestaurantGallery/>} /> 
            <Route path='/gallery/restaurant' element={< RestaurantGallery />} />
            <Route path='/gallery/chalet' element={<ChaletGallery />} />
            <Route path='/gallery/activity' element={<  ActivityGallery/>} />
            <Route path='/gallery/nature' element={< NatureGallery/>} />
            <Route path='/gallery/events' element={< EventsGallery/>} />
          </Route>

         {/* Routes of the Rooms  page */}
          <Route path='/room' element={< Rooms />}/>
          <Route path='/New_Room' element={<ADNewRoom />}/>
          <Route path='/edit_room' element={<ADNewRoom />}/>
          <Route path='/popup_room' element={<PopUpRoom />}/>
          <Route path='/delete_room' element={<ADDeletedRooms />}/>
         

          {/* Routes of the Booking page */}
          <Route path='/booking' element={< Booking />}/>

            {/* Routes of the Explore page */}
          <Route path='/explore' element={< Explore />}>
            <Route index element={<Restaurant/>} /> 
            <Route path='/explore/restaurant' element={< Restaurant />} />
            <Route path='/explore/chalet' element={< Chalet/>} />
            <Route path='/explore/activity' element={< Activity />} />
            <Route path='/explore/nature' element={<Nature />} />
            <Route path='/explore/pool' element={<Pool/>} />
            <Route path='/explore/events' element={<Events />} />
          </Route>
         
          <Route path='/new_ArticleExplore' element={<NewArticleExplore />} />
          <Route path='/edit_explore' element={<NewArticleExplore />} />
          <Route path='/popup_explore' element={<PopUpExplore />} />
         


            {/* Routes of the Food page */}
          <Route path='/food' element={< Food />}>
            <Route index element={<WesternFood/>} /> 
            <Route path='/food/Western_Food' element={<WesternFood/>}/>
            <Route path='/food/Oriental_Food' element={<OrientalFood/>}/>
            <Route path='/food/Traditional_Food' element={<TraditionalFood/>}/>
          </Route>
          <Route path='/new_Food' element={<NewFood/>}/>
          <Route path='/edit_food' element={<NewFood/>}/>
          <Route path='/popup_food' element={<PopUpFood/>}/>


            {/* Routes of the Inbox page */}
          
           <Route path='/inbox' element={< Inbox />}/>
      

         
        
        </Routes>
       

       
        
        
      </div>

  );
}

export default App;
