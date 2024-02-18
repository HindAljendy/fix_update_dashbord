import './Inbox.css'
import MessageDisplay from '../../componnents/MessageDisplay/MessageDisplay';
import filter from './../../images/frame.svg'
import trash from './../../images/delete small.svg'
import { useEffect, useState } from 'react'
import Topbar from '../../componnents/Topbar/Topbar'
import HelpCenter from '../../Api/HelpCenter/HelpCenter';
import { useParams } from 'react-router-dom';
import MessageDetails from '../../componnents/MessageDetails/MessageDetails';
import axios from 'axios';

const InboxComponnent = () => {


    const [show, setShow] = useState(true);
    const { id } = useParams()

    const [data, setdata] = useState([]);
    const token = localStorage.getItem('token');

    useEffect(() => {

        const config = {
            headers: {
                'Accept': 'application/json',
                'Authorization': token,
            }
        };
        axios.get(`http://127.0.0.1:8000/api/helpcenter/${id}`, config)
            .then(response => {
                setdata(response.data.data);
                console.log(data);
            })
            .catch(error => {
                console.error(error);
            });
    },
        [id]);

    return (
        <div className='HJ_container rh-inbox'>
            <Topbar title="Inbox" />
            <div className="border-b">
                <div className="toolbar">
                    <div>
                        <input type="checkbox" name="select" className='select_inbox' />
                        <img src={filter} alt='filter' className='filter_inbox' />

                    </div>
                    <img src={trash} alt='delete' />
                </div>


            </div>

            <div className='d-flex'>
                <div className='Myscroll'>
                    <div className="list">
                        <HelpCenter
                            setShow={setShow}
                        />
                    </div>
                </div>
                <ul>
                    {Object.keys(data).map((key) => (
                        <li key={key}>
                            <strong>{key}:</strong>{id}
                        </li>
                    ))}
                </ul>
            </div>


        </div>
    )
}

export default InboxComponnent



