import { IoCall, IoLocation } from "react-icons/io5";
import PageBanner from "../components/PageBanner";
import Card from "../Shared/Card";
import { HiOutlineMail } from "react-icons/hi";
import ContactForm from "../Shared/ContactForm";


const ContactPage = () => {
    return (
        <div>
            {/* banner and items */}
           <PageBanner pageName={'contact'}></PageBanner>
           <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 w-11/12 mx-auto py-8">
            <Card icon={<IoLocation/>} 
            title={'address'} 
            info={'Narayanganj,Bangladesh'}></Card>
            <Card 
            icon={<HiOutlineMail/>}
            title={'e-mail'}
            info={'antodasahir@gmail.com'}></Card>
            <Card
            icon={<IoCall/>}
            title={'call me'}
            info={'+8801948039854 || +8801845282040'}></Card>
           </div>
           {/* contact form */}
           <ContactForm></ContactForm>
        </div>
    );
};

export default ContactPage;