import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const videoData = [
  {
    id: 1,
    url: "https://www.youtube.com/embed/hCcvFHSm7vM?si=AMGpwhnOrKKvU0lv",
  },
  {
    id: 2,
    url: "https://www.youtube.com/embed/e-h4cAFG57A?si=zdavd9qp7LIHBb6S",
  },
  {
    id: 3,
    url: "https://www.youtube.com/embed/8VAzMEzXkHQ?si=x2TQVwhN6A1bOW5h",
  },
];

export default function VideoTabsContent() {
  return (
    <TabsContent value="videos" className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videoData.map((video, index) => (
          <motion.div
            key={video.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900 transform transition-transform hover:scale-105">
              <CardContent className="p-0 aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={video.url}
                  title="YouTube video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-t-lg"
                />
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </TabsContent>
  );
}
