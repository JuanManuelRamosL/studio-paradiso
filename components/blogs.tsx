import { TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Blogs() {
  return (
    <TabsContent value="exclusivo" className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-gray-900">
          <CardContent className="p-4">
            <h3 className="text-xl font-bold mb-2">Contenido Exclusivo</h3>
            <p className="text-gray-400">
              Accede a nuestro contenido exclusivo para miembros
            </p>
          </CardContent>
        </Card>
      </div>
    </TabsContent>
  );
}
