import Rooms from "@/components/RoomPageComponent";
import ContactSection from "@/components/ContactSection";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <h1 className="text-4xl font-bold mb-4">Rooms</h1>
      <ContactSection />
    </div>
  );
}
