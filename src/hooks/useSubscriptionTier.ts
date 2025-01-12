import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

export const useSubscriptionTier = (user: any) => {
  const [subscriptionTier, setSubscriptionTier] = useState<string | null>(null);

  const checkSubscriptionTier = async (user: any) => {
    if (!user) return;
    
    // Check for subscription using user_id
    const { data: subData } = await supabase
      .from('subscriptions')
      .select('tier')
      .eq('user_id', user.id)
      .maybeSingle();

    if (subData) {
      setSubscriptionTier(subData.tier);
    } else {
      // Check basic_signups if no subscription found
      const { data: basicData } = await supabase
        .from('basic_signups')
        .select('email')
        .eq('email', user.email)
        .maybeSingle();

      if (basicData) {
        setSubscriptionTier('basic');
      }
    }
  };

  useEffect(() => {
    if (user?.user) {
      checkSubscriptionTier(user.user);
    }
  }, [user]);

  return { subscriptionTier, setSubscriptionTier, checkSubscriptionTier };
};