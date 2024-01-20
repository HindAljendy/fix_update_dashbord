import './BookingCard.css'
export default function BookingCard(){
    return(
        <div className="booking-card rh-card">
            <div className="information ">
                <h3>Ali Saleh</h3>
                <span className="font-1">July 17, 2023</span>
            </div>
            <div className="information">
                <div> 
                    <span className='information_font'>Phone :</span>
                    <span className='personal_information_font'>0963 996 564 655</span>
                </div>

                <div>
                    <span className='information_font'>Check-in date :</span>
                    <span className='personal_information_font'>2023/02/15</span>
                </div>

                <div>
                    <span className='information_font'>Room type :</span>
                    <span className='personal_information_font'> Duplex Room</span>
                </div>
            </div>

            <div className="information">
                <div>
                    <span className='information_font'>E-mail :</span>
                    <span className='personal_information_font'> ali-s@gmail.com</span>
                </div>

                <div>
                    <span className='information_font'>Check-out date :</span>
                    <span className='personal_information_font'>2023/02/15</span>
                </div>

                <div>
                    <span className='information_font'>guests Number :</span>
                    <span className='personal_information_font'>2</span>
                </div>
            </div>
           

            <div className="description">
                <span className='description_font'>Description</span>
                <p className='personal_description_font'>Newly refurnished luxury accommodation with finest quality linen & quality decor. Air Conditioning Electric Blankets,
                Ironing Boards, Mini Bar, Flat Screen & Free In house Movies, WiFi and Housekeeping by request.</p>
            </div>
       </div>
    )
}