
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings, Check, ExternalLink } from 'lucide-react';
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

  // Use the webhook URL from the input if provided
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const webhookParam = params.get('webhook');
    if (webhookParam) {
      setPrequalUrl(webhookParam);
      setApplicationUrl(webhookParam);
    }
  }, []);

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
    
    localStorage.setItem('prequalify_webhook', prequalUrl);
    localStorage.setItem('application_webhook', applicationUrl);
    
    setSaved(true);
    toast("Webhook URLs saved successfully");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <Settings className="h-4 w-4" />
          <span>Integration Settings</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Integration Settings</DialogTitle>
          <DialogDescription>
            Configure webhook URLs to connect with your CRM and Google Drive via Zapier
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 py-4">
          <div className="bg-blue-50 p-4 rounded-md mb-4 text-sm">
            <h3 className="font-bold text-blue-800 mb-1">How to set up Zapier webhooks:</h3>
            <ol className="list-decimal pl-5 space-y-1 text-blue-700">
              <li>Log in to Zapier and create a new Zap</li>
              <li>Choose "Webhooks by Zapier" as your trigger app</li>
              <li>Select "Catch Hook" as the trigger event</li>
              <li>Copy the webhook URL that Zapier provides and paste it below</li>
              <li>Configure your Zap actions to process the received data</li>
            </ol>
            <div className="mt-2">
              <a 
                href="https://zapier.com/help/create/code-webhooks/trigger-zaps-from-webhooks" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 flex items-center"
              >
                View Zapier webhook instructions
                <ExternalLink className="h-3 w-3 ml-1" />
              </a>
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="prequalUrl" className="text-lg font-bold">Pre-qualification Webhook URL</Label>
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
            <Label htmlFor="applicationUrl" className="text-lg font-bold">Full Application Webhook URL</Label>
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
