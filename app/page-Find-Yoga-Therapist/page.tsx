import Layout from "@/components/layout/Layout";
import LoginContent from "./YogaTherapistContent";

export const metadata = {
  title: "Find-A-Yoga-Therapist-Near-Me | My Yoga Network",
  description:
    "Discover yoga therapists near you with My Yoga Network. Connect with skilled instructors, enjoy tailored wellness programs, and experience professional growth and support.",
};

export default function PageLogin() {
  return (
    <Layout>
      <LoginContent />
    </Layout>
  );
}
