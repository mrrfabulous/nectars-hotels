import SimpleGoogleMap from "@/components/NewMap";

export default function Page() {
    return (
      <div className="flex flex-col items-center justify-center py-16">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <SimpleGoogleMap className="w-full" />
      </div>
    );
  }