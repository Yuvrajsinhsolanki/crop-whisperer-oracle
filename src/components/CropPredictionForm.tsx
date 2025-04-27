
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

interface FormData {
  nitrogen: number;
  phosphorous: number;
  potassium: number;
  temperature: number;
  humidity: number;
  ph: number;
  rainfall: number;
}

const initialFormData: FormData = {
  nitrogen: 0,
  phosphorous: 0,
  potassium: 0,
  temperature: 0,
  humidity: 0,
  ph: 0,
  rainfall: 0,
};

export function CropPredictionForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [predictedCrop, setPredictedCrop] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: parseFloat(value) || 0,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate prediction (replace with actual API call later)
    setTimeout(() => {
      setPredictedCrop("Rice");
      setIsLoading(false);
      toast({
        title: "Prediction Complete",
        description: "Based on the provided parameters, the predicted crop is Rice.",
      });
    }, 1500);
  };

  return (
    <Card className="w-full max-w-xl p-6 space-y-6 bg-white/90 backdrop-blur-sm shadow-lg">
      <div className="space-y-2 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-primary">Crop Prediction</h2>
        <p className="text-muted-foreground">
          Enter soil parameters and environmental conditions to predict the ideal crop.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="nitrogen">Nitrogen (N)</Label>
            <Input
              id="nitrogen"
              name="nitrogen"
              type="number"
              placeholder="Enter nitrogen value"
              value={formData.nitrogen || ""}
              onChange={handleInputChange}
              required
              min="0"
              max="140"
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phosphorous">Phosphorous (P)</Label>
            <Input
              id="phosphorous"
              name="phosphorous"
              type="number"
              placeholder="Enter phosphorous value"
              value={formData.phosphorous || ""}
              onChange={handleInputChange}
              required
              min="0"
              max="140"
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="potassium">Potassium (K)</Label>
            <Input
              id="potassium"
              name="potassium"
              type="number"
              placeholder="Enter potassium value"
              value={formData.potassium || ""}
              onChange={handleInputChange}
              required
              min="0"
              max="200"
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="temperature">Temperature (°C)</Label>
            <Input
              id="temperature"
              name="temperature"
              type="number"
              placeholder="Enter temperature"
              value={formData.temperature || ""}
              onChange={handleInputChange}
              required
              min="0"
              max="50"
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="humidity">Humidity (%)</Label>
            <Input
              id="humidity"
              name="humidity"
              type="number"
              placeholder="Enter humidity"
              value={formData.humidity || ""}
              onChange={handleInputChange}
              required
              min="0"
              max="100"
              className="bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="ph">pH Level</Label>
            <Input
              id="ph"
              name="ph"
              type="number"
              placeholder="Enter pH level"
              value={formData.ph || ""}
              onChange={handleInputChange}
              required
              min="0"
              max="14"
              step="0.1"
              className="bg-white"
            />
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="rainfall">Rainfall (mm)</Label>
            <Input
              id="rainfall"
              name="rainfall"
              type="number"
              placeholder="Enter rainfall amount"
              value={formData.rainfall || ""}
              onChange={handleInputChange}
              required
              min="0"
              max="300"
              className="bg-white"
            />
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary/90"
          disabled={isLoading}
        >
          {isLoading ? "Predicting..." : "Predict Crop"}
        </Button>

        {predictedCrop && (
          <div className="mt-6 p-4 bg-muted rounded-lg">
            <h3 className="text-lg font-semibold text-primary mb-2">Predicted Crop</h3>
            <p className="text-2xl font-bold text-accent">{predictedCrop}</p>
          </div>
        )}
      </form>
    </Card>
  );
}
