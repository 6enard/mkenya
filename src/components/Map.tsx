export default function Map() {
  return (
    <div className="w-full h-full min-h-[300px] sm:min-h-[450px]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.040683795759!2d36.978520174044625!3d-1.1312444354743858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1137995dd891%3A0x41d708cee52d4b56!2smkenya%20studio!5e0!3m2!1sen!2ske!4v1759869143865!5m2!1sen!2ske"
        width="100%"
        height="100%"
        style={{ border: 0, minHeight: '450px' }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="mkenya studio location"
      />
    </div>
  );
}
