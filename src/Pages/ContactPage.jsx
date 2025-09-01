import { IoCall, IoLocation } from "react-icons/io5";
import PageBanner from "../components/PageBanner";
import Card from "../Shared/Card";
import { HiOutlineMail } from "react-icons/hi";


const ContactPage = () => {
    return (
        <div>
           <PageBanner pageName={'contact'}></PageBanner>
           <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-11/14 mx-auto py-8">
            <Card icon={<IoLocation/>} 
            title={'address'} 
            info={'Narayanganj,Bangladesh'}></Card>
            <Card 
            icon={<HiOutlineMail/>}
            title={'e-mail'}
            info={'ahirdas@gmail.com'}></Card>
            <Card
            icon={<IoCall/>}
            title={'call me'}
            info={'+8801948039854'}></Card>
           </div>
        </div>
    );
};

export default ContactPage;