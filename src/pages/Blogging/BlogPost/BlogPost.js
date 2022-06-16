import './BlogPost.css';
import Card_custom from '../../../components/Card_custom/Card_custom';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
/**
* @author
* @function BlogPost
**/

const BlogPost = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [data, setData] = useState([]);
    const resId = (!params.params) ? 1 : params.params;
  //  console.log(props + " props");
        console.log(resId + " resId");
        
        
       // console.log(details+ " details[0]");
       //setData(require('../../../blogs.json'));
    // useEffect(() => {
    //     setData(require('../../../blogs.json'));
    //     const details = data.filter(res => res.id === (resId));
    //     const answer = details[0];
    //     console.log(answer)
    // }, [])
    
    console.log(data)
    const details = data[0].filter(res => res.id === (resId));
    const answer = details;
    console.log(answer)
    return (
        <div className="blogPostContainer">
            <Card_custom style={{ marginBottom: '20px' }}>
                <div className="blogHeader">
                    <span className="blogCategory" style={{ fontSize: '20px' }}>Featured</span>
                    <h1 className="postTitle" style={{ padding: '0 50px', fontWeight: 500, fontSize: '40px' }}></h1>
                    {/* <h1 className="postTitle">Beautiful is always beautiful</h1> */}
                    <span clasdsName="postedBy">posted on 04 June,2022 by Navya Jayapal</span>
                </div>

                <div className="postImageContainer">
                    {/* <img src={require(`../../../assets/images/${answer.image}`)} alt="Post Image" /> */}
                </div>

                <div className="postContent">

                    <p className='postContents'>The short answer is yes.</p>

                    <p className='postContents'> Then why do commercials say you are wasting your time just doing cardio on the elliptical or treadmill, while basketball players and runners look so thin?
                        The short answer is they want your money and are leaving details out by saying you won’t lose weight doing cardio to hook you to listen in and buy their products.</p>


                    <p className='postContents'> There are 3 main ways I’ve lost weight, here is my article on those methods. One method that worked was to do cardio and watch my calories. I am a certified weight loss therapist and member of IAOTH.

                        They tell you cardio is a<em>“waste of time”</em>  to hook you into listening, becoming attached, convinced they are an expert and to buy. After you’ve bought it they tell you what you don’t want to hear, to watch your calories. Essentially the detail in the videos they leave out is you have to watch your caloric intake when you exercise, otherwise with no caloric deficit, cardio, HIIT or anything else won’t help you lose fat.

                        <p className='postContents'><em>
                            The main successful method of weight loss regardless of how many details different people trying to sell you plans try to confuse you with is to have a calorie deficit. You already know that I’m sure, but many commercials and other articles confuse you and skew you off your path in hopes to sell you their products. So what these plans are leaving out in their commercials but eventually tell you when you buy it is that you have to watch your calories. Doing a lot of cardio without watching your calories probably wouldn’t help you very much if you’re not ending up in a deficit, that is true, however you don’t have to be a mega weightlifter to lose weight. You can lose fat not doing any exercise at all and most of the weight I’ve lost is strictly watching my diet.

                            I talked about the three methods that I’ve actually used to lost weight and my article here if you want to look at the details.
                        </em></p>
                        <p className='postContents'>
                            <em>
                                I hope you found this useful to clear out the confusing clutter that a lot of commercials try to hook you with. Cardio can be very useful in burning calories and burning fat, don’t leave it out of your regimen if you plan on using exercise in your weight loss journey. It’s also good for the heart, hence the term “cardio”.
                                Looking for more advice or need an energy healing? Check out my offerings in the menu at the top of the page.
                            </em>

                        </p>

                    </p>



                </div>

            </Card_custom>
        </div>
    )

}

export default BlogPost;