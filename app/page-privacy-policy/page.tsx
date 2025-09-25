import Layout from "@/components/layout/Layout";
import LoginContent from "./PrivacyContent";

export const metadata = {
  title: "Privacy Policy | My Yoga Network",
  description:
    "Read the Privacy Policy of My Yoga Network to learn how we collect, use, protect, and share information while ensuring your privacy and security on our platform.",
};

export default function PageLogin() {
  return (
    <Layout>
      <LoginContent />
    </Layout>
  );
}
