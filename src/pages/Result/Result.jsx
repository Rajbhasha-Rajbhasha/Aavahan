import React from 'react';
import './Result.css'; // Assuming your CSS is in this file

const WinnerAnnouncement = () => {
    return (
        <div className="winner-announcement">
            {/* Banner Section */}
            <div className="banner1">
                <img src="https://i.postimg.cc/MTP4tK3T/banner.png" alt="Banner" className="banner1-img" />
            </div>

            <div className="banner1-heading">
                <h1>आह्वान</h1>
            </div>

            {/* Treasure Hunt Section */}
            <section className="event-section">
                <h2>खजाना खोज</h2>
                <div className="winner-icons">
                    <div className="winner first-place">
                        <h3>विजेता</h3>
                        <p>एड्वेंट्स ऑफ गॉड्स एंड डेमन्स</p>
                        <ul>
                            <li>प्रीतपाल केशर</li>
                            <li>अनिरुद्ध मल्होत्रा</li>
                        </ul>
                    </div>
                    <div className="winner second-place">
                        <h3>रनर अप्स</h3>
                        <p>3 इडियट्स</p>
                        <ul>
                            <li>सोनाक्षी</li>
                            <li>यधु कृष्णन</li>
                            <li>अर्पित गुप्ता</li>
                        </ul>
                    </div>
                    <div className="winner third-place">
                        <h3>दूसरा रनर</h3>
                        <p>टीम टिसियन्स</p>
                        <ul>
                            <li>रीता भगत</li>
                            <li>मोहम्मद आदिल</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Kavita Lekhan Section */}
            <section className="event-section">
                <h2>कविता लेखन</h2>
                <div className="winner-icons">
                    <div className="winner first-place">
                        <img src="https://i.postimg.cc/jnQcyX2M/first-place-icon.png" alt="1st Place Icon" className="icon" />
                        <p>गोविन्द सिंह राठौड़</p>
                        <p>(केशव महाविद्यालय, दिल्ली)</p>
                    </div>
                    <div className="winner second-place">
                        <img src="https://i.postimg.cc/w3hwK62D/second-place-icon.png" alt="2nd Place Icon" className="icon" />
                        <p>आयुष केशरवानी</p>
                        <p>(यूआईटी भोपाल)</p>
                    </div>
                    <div className="winner third-place">
                        <img src="https://i.postimg.cc/56bnbZKT/third-place-icon.png" alt="3rd Place Icon" className="icon" />
                        <p>युवराज सिंह</p>
                        <p>(एनआईटी रायपुर)</p>
                    </div>
                </div>
            </section>

            {/* Laghu Video Section */}
            <section className="event-section">
                <h2>लघु वीडियो</h2>
                <div className="winner-icons">
                    <div className="winner first-place">
                        <img src="/src/assets/results/first-place-icon.png" alt="1st Place Icon" className="icon" />
                        <p>रोहित कुमार सिंह</p>
                        <p>(एनआईटी रायपुर)</p>
                    </div>
                    <div className="winner second-place">
                        <img src="/src/assets/results/second-place-icon.png" alt="2nd Place Icon" className="icon" />
                        <p>प्रफुल्ल द्विवेदी</p>
                        <p>(लखनऊ विश्वविद्यालय)</p>
                    </div>
                    <div className="winner third-place">
                        <img src="/src/assets/results/third-place-icon.png" alt="3rd Place Icon" className="icon" />
                        <p>प्रतीक</p>
                        <p>(ज़ेवियर स्कूल ऑफ मैनेजमेंट)</p>
                    </div>
                </div>
            </section>

            <div className="banner1-heading">
                <h1>मातृभूमि दिवस</h1>
            </div>

            <section className="event-section">
                <h2>खजाना खोज</h2>
                <div className="winner-icons">
                    <div className="winner first-place">
                        <h3>विजेता</h3>
                        <p>एड्वेंट्स ऑफ गॉड्स एंड डेमन्स</p>
                        <ul>
                            <li>प्रीतपाल केशर</li>
                            <li>अनिरुद्ध मल्होत्रा</li>
                        </ul>
                    </div>
                    <div className="winner second-place">
                        <h3>रनर अप्स</h3>
                        <p>3 इडियट्स</p>
                        <ul>
                            <li>सोनाक्षी</li>
                            <li>यधु कृष्णन</li>
                            <li>अर्पित गुप्ता</li>
                        </ul>
                    </div>
                    <div className="winner third-place">
                        <h3>दूसरा रनर</h3>
                        <p>टीम टिसियन्स</p>
                        <ul>
                            <li>रीता भगत</li>
                            <li>मोहम्मद आदिल</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Kavita Lekhan Section */}
            <section className="event-section">
                <h2>कविता लेखन</h2>
                <div className="winner-icons">
                    <div className="winner first-place">
                        <img src="https://i.postimg.cc/jnQcyX2M/first-place-icon.png" alt="1st Place Icon" className="icon" />
                        <p>गोविन्द सिंह राठौड़</p>
                        <p>(केशव महाविद्यालय, दिल्ली)</p>
                    </div>
                    <div className="winner second-place">
                        <img src="https://i.postimg.cc/w3hwK62D/second-place-icon.png" alt="2nd Place Icon" className="icon" />
                        <p>आयुष केशरवानी</p>
                        <p>(यूआईटी भोपाल)</p>
                    </div>
                    <div className="winner third-place">
                        <img src="https://i.postimg.cc/56bnbZKT/third-place-icon.png" alt="3rd Place Icon" className="icon" />
                        <p>युवराज सिंह</p>
                        <p>(एनआईटी रायपुर)</p>
                    </div>
                </div>
            </section>

            {/* Laghu Video Section */}
            <section className="event-section">
                <h2>लघु वीडियो</h2>
                <div className="winner-icons">
                    <div className="winner first-place">
                        <img src="/src/assets/results/first-place-icon.png" alt="1st Place Icon" className="icon" />
                        <p>रोहित कुमार सिंह</p>
                        <p>(एनआईटी रायपुर)</p>
                    </div>
                    <div className="winner second-place">
                        <img src="/src/assets/results/second-place-icon.png" alt="2nd Place Icon" className="icon" />
                        <p>प्रफुल्ल द्विवेदी</p>
                        <p>(लखनऊ विश्वविद्यालय)</p>
                    </div>
                    <div className="winner third-place">
                        <img src="/src/assets/results/third-place-icon.png" alt="3rd Place Icon" className="icon" />
                        <p>प्रतीक</p>
                        <p>(ज़ेवियर स्कूल ऑफ मैनेजमेंट)</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WinnerAnnouncement;
