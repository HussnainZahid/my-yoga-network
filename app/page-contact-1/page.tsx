import Layout from "@/components/layout/Layout";
import LoginContent from "./ContactContent";

export const metadata = {
  title: "Contact Us | My Yoga Network",
  description:
    "Get in touch with My Yoga Network for inquiries, support, or to learn more about our yoga and wellness programs for individuals and organizations.",
};


export default function PageLogin() {
  return (
	<Layout>
	  <LoginContent />
	</Layout>
  );
}
