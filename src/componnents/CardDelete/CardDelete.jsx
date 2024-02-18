import axios from 'axios';
import edit_red from './../../images/edit_red.svg'
import recovery from './../../images/recovery-convert.svg'
import { Link } from 'react-router-dom'

const CardDelete = ({ id , image ,Title ,description , Tags, Date, summary}) => {

    // const token = localStorage.getItem('token');

    const handleDeleteFors = async () => {
        try { 
            const headers = {
            'Accept': 'application/json',
            'Authorization':token,
          };
          await axios.delete(`http://127.0.0.1:8000/api/forceDestroy/${id}` , {headers})
          window.location.reload()
        } catch (error) {
          console.error('Error deleting item:', error);
        }
      };

      const token = localStorage.getItem('token');

      const handleRestor = async () => {
        try { 
            const headers = {
            'Content-Type': 'application/json',
            'Authorization':token,
          };
          await axios.post(`http://127.0.0.1:8000/api/restorArticle/${id}` , {},  {headers})
        //   window.location.reload()
        .then(res => console.log(token))
        } catch (error) {
          console.error('Error restoring item:', error);
        }
      };

  return (
    <div className="HJ_card" >
        <div className="row">
            <div className="col-md-4  HJ_article-img">
                <img src={image}  alt="article" />
            </div>
            <div className="col-md-8">
                <div className="HJ_card-body">
                    <div className='HJ_card-name'>
                        <h4 className="HJ_card-title">{Title}</h4>
                        <h6  className="HJ_text-body-secondary">{Date}</h6>
                    </div>
                    <p className="HJ_card-text">{description}</p>
                    <p className="HJ_card-text"><small className=" HJ_text-body-secondary">{Tags}</small></p>
                    <div className='HJ_card-icons'>
                        <div className='HJ_card-icons-first'>
                            <Link to='/delete_article'>
                                    <img 
                                    onClick={() => handleDeleteFors()}
                                    src={edit_red} alt="edit" /> 
                            </Link>
                            <Link>
                                <img 
                                onClick={() => handleRestor()}
                                src={recovery} alt="recovery" /> 
                            </Link>
                        
                        </div>
                        

                    </div>

                </div>
            </div>
        </div>
    </div>

    
  )
 } 

export default CardDelete
