
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings, Check } from 'lucide-react';
import { toast } from "sonner";

interface ZapierSettingsProps {
  prequalWebhookUrl: string;
  applicationWebhookUrl: string;
  setPrequalWebhookUrl: (url: string) => void;
  setApplicationWebhookUrl: (url: string) => void;
}

const ZapierSettings: React.FC<ZapierSettingsProps> = ({
  prequalWebhookUrl,
  applicationWebhookUrl,
  setPrequalWebhookUrl,
  setApplicationWebhookUrl
}) => {
  const [prequalUrl, setPrequalUrl] = useState(prequalWebhookUrl);
  const [applicationUrl, setApplicationUrl] = useState(applicationWebhookUrl);
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    if (saved) {
      const timer = setTimeout(() => {
        setSaved(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [saved]);

  const handleSave = () => {
    setPrequalWebhookUrl(prequalUrl);
    setApplicationWebhookUrl(applicationUrl);
    
    localStorage.setItem('prequalify_zapier_webhook', prequalUrl);
    localStorage.setItem('application_zapier_webhook', applicationUrl);
    
    setSaved(true);
    toast("Zapier webhook URLs saved successfully");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Settings className="h-4 w-4" />
          <span>Zapier Settings</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Zapier Integration Settings</DialogTitle>
          <DialogDescription>
            Configure webhook URLs to connect with Go High Level CRM via Zapier
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <Label htmlFor="prequalUrl">Pre-qualification Webhook URL</Label>
            <Input
              id="prequalUrl"
              value={prequalUrl}
              onChange={(e) => setPrequalUrl(e.target.value)}
              placeholder="https://hooks.zapier.com/hooks/catch/..."
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">
              Data from pre-qualification form will be sent to this URL.
            </p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="applicationUrl">Full Application Webhook URL</Label>
            <Input
              id="applicationUrl"
              value={applicationUrl}
              onChange={(e) => setApplicationUrl(e.target.value)}
              placeholder="https://hooks.zapier.com/hooks/catch/..."
              className="w-full"
            />
            <p className="text-xs text-muted-foreground">
              Data from full application form will be sent to this URL.
            </p>
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button onClick={handleSave} className="flex items-center gap-2">
            {saved ? (
              <>
                <Check className="h-4 w-4" />
                <span>Saved</span>
              </>
            ) : (
              <span>Save Settings</span>
            )}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ZapierSettings;
