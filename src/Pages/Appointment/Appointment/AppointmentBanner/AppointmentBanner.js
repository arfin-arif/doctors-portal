import chair from '../../../../assets/images/chair.png'
import chairBg from '../../../../assets/images/bg.png'
import { DayPicker } from 'react-day-picker';


const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {



    return (
        <header style={{ background: `url(${chairBg})` }}>
            <div className="hero my-6">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt='dentist chair' className=" max-w-sm rounded-lg shadow-2xl" />
                    <div className='mr-6'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                        />

                    </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;