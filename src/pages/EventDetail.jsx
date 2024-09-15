import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageCarousel from './Carousel/ImageCarousel';
import './EventDetail.css';

const eventDetails = {
  nukkad: {
    title: 'नुक्कड़ नाटक',
    nukkad: '18/9/24',
    time: '1:00 PM',
    venue: 'Front of Main Building',
    description: 'यह एक सड़क पर प्रस्तुत किया जाने वाला नाट्य रूप है जिसमें समाज की समस्याओं या किसी सामाजिक मुद्दे पर ध्यान आकर्षित किया जाता है। इसमें सीमित मंच और साधन होते हैं, लेकिन संदेश स्पष्ट और जोरदार होता है।',
    images: ['https://i.postimg.cc/Twpxpx0r/IMG-20240314-WA0006.jpg', 'https://i.postimg.cc/YCzMPbjm/IMG-20240314-WA0003.jpg', 'https://i.postimg.cc/QC2yNGYx/IMG-6869.avif'],
    rulesFile: 'nukkad.txt',
    link: ''
  },
  andha: {
    title: 'अंधा मोड़',
    nukkad: '19/9/24',
    time: '1:00 PM',
    venue: 'Front of Main Building',
    description: 'यह एक खेल या गतिविधि है जिसमें प्रतिभागी अपनी आंखों पर पट्टी बांधकर एक निश्चित मार्ग को पार करने का प्रयास करते हैं। इसमें दिशा ज्ञान और सहयोग की महत्वपूर्ण भूमिका होती है।',
    images: ['https://i.postimg.cc/LXCsbvCV/DSC01889.jpg', 'https://i.postimg.cc/Pr8qSWmm/DSC01903.jpg', 'https://i.postimg.cc/7Z8Zd5Vj/IMG-7230.avif'],
    rulesFile: 'andha.txt',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSe7MepNkwXY6LI4rmwhz1f0cZg4xs1Ntq2MvXXNwO75Zp8tvw/viewform'
  },
  treasure: {
    title: 'खजाने की खोज',
    nukkad: '20/9/24',
    time: '1:00 PM',
    venue: 'Front of Main Building',
    description: 'इसमें प्रतिभागियों को विभिन्न सुरागों के आधार पर एक निर्धारित लक्ष्य यानी खजाने तक पहुंचना होता है। यह दिमागी खेल है जिसमें त्वरित सोच और निर्णय लेने की क्षमता आवश्यक होती है।',
    images: ['/src/assets/images/nukkad.jpg', '/src/assets/images/nukkad.jpg', '/src/assets/images/nukkad.jpg'],
    rulesFile: 'treasure.txt',
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSe7MepNkwXY6LI4rmwhz1f0cZg4xs1Ntq2MvXXNwO75Zp8tvw/viewform'
  },
  vaachan: {
    title: 'कविता वाचन',
    nukkad: '21/9/24',
    time: '1:00 PM',
    venue: 'Front of Main Building',
    description: 'इसमें प्रतिभागी अपनी या किसी प्रसिद्ध कवि की कविताओं का प्रभावी ढंग से वाचन करते हैं। कविता की भावनाओं और लय को सही ढंग से प्रस्तुत करना महत्वपूर्ण होता है।',
    images: ['https://i.postimg.cc/Y0xBPSCB/DSC01779.jpg', 'https://i.postimg.cc/kggqkWS1/IMG20230911172459.jpg', 'https://i.postimg.cc/v87yT0L2/DSC01771.jpg'],
    rulesFile: 'vaachan.txt' ,
    link: 'https://docs.google.com/forms/d/e/1FAIpQLSe7MepNkwXY6LI4rmwhz1f0cZg4xs1Ntq2MvXXNwO75Zp8tvw/viewform'
  },
};

function EventDetail() {
  const { id } = useParams();
  const event = eventDetails[id];
  const [rules, setRules] = useState('');

  useEffect(() => {
    fetch(`/src/assets/txts/${event.rulesFile}`)
      .then((response) => response.text())
      .then((text) => setRules(text))
      .catch((error) => console.error('Error fetching rules:', error));
  }, [id]);

  return (
    <div className="details">
      <div className="content">
        <h1>{event.title}</h1>

        <div className='minor-details'>
          <div className='minor'>
            <img src='/src/assets/svgs/calendar.svg' style={{ height: '50px', width: '50px', borderRadius: '50%' }} alt="nukkad Icon" />
            <p className='small-text'>Date : {event.nukkad}</p>
          </div>
          <div className='minor'>
            <img src='/src/assets/svgs/location.svg' style={{ height: '50px', width: '50px', borderRadius: '50%' }} alt="nukkad Icon" />
            <p className='small-text'>Venue : {event.venue}</p>
          </div>
          <div className='minor'>
            <img src='/src/assets/svgs/time.svg' style={{ height: '50px', width: '50px', borderRadius: '50%' }} alt="nukkad Icon" />
            <p className='small-text'>Time : {event.time}</p>
          </div>
        </div>

        <p>{event.description}</p>

        {/* Conditional rendering for the "Register" button */}
        {id !== 'nukkad' && (
          <button className="register-button"><a href={event.link}>Register Now</a></button>
        )}

        {rules && rules.trim() !== '' ? (
          <div className="rules-contact-wrapper">
            <div className="rules-container">
              <p className='rules'>नियम</p>
              <div className="rules-div">
                <pre>{rules}</pre>
              </div>
            </div>
            <div className="contact-container">
              <div style={{ display: 'flex', gap: '10px' }}>
                <img src='/src/assets/svgs/contact.svg' style={{ height: '50px', width: '50px', borderRadius: '50%' }} />
                <p className='rules'>संपर्क</p>
              </div>
              <div className='organizer'>Aryan: 9931603459</div>
              <div className='organizer' style={{ marginBottom: '50px' }}>Ayush: 9931603459</div>
            </div>
          </div>
        ) : (
          <div style={{ width: '90%', marginTop:'2rem' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <img src='/src/assets/svgs/contact.svg' style={{ height: '50px', width: '50px', borderRadius: '50%' }} />
              <p className='rules'>संपर्क</p>
            </div>
            <div className='organizer'>Aryan Pareek : 9931603459</div>
            <div className='organizer' style={{ marginBottom: '50px' }}>Ayush: 9931603459</div>
          </div>
        )}

        <ImageCarousel images={event.images} />
      </div>
    </div>
  );
}

export default EventDetail;
