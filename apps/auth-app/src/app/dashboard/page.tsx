"use client";

import { useAuth } from "@/lib/auth-context";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  );
}

function DashboardContent() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-background grid-pattern">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold font-heading gradient-text">
            <a href="/">GRFF</a>
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:block">
              {user?.email}
            </span>
            <button
              onClick={logout}
              className="bg-muted text-muted-foreground font-medium px-4 py-2 rounded-lg hover:bg-surface-hover transition-colors text-sm"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-5xl mx-auto px-4 py-10">
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-heading font-bold text-foreground">
              Welcome, {user?.name}!
            </h2>
            <p className="text-muted-foreground mt-1">Here&apos;s your account overview.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Profile Card */}
            <div className="glass rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-heading font-semibold text-foreground">Profile</h3>
              <div className="space-y-3">
                <ProfileField label="Name" value={user?.name} />
                <ProfileField label="Email" value={user?.email} />
                <ProfileField label="Mobile" value={user?.mobile} />
                <ProfileField label="Gender" value={user?.gender} />
              </div>
            </div>

            {/* Address Card */}
            <div className="glass rounded-2xl p-6 space-y-4">
              <h3 className="text-lg font-heading font-semibold text-foreground">Address</h3>
              <div className="space-y-3">
                <ProfileField label="Address" value={user?.address} />
                <ProfileField label="City" value={user?.city} />
                <ProfileField label="State" value={user?.state} />
                <ProfileField label="Pincode" value={user?.pincode} />
                <ProfileField label="Country" value={user?.country} />
              </div>
            </div>
          </div>

          {/* Account Status */}
          <div className="bg-card rounded-2xl p-6 border border-border glow-primary">
            <h3 className="text-lg font-heading font-semibold text-foreground mb-3">Account Status</h3>
            <div className="flex items-center gap-2">
              <span
                className={`inline-block w-2.5 h-2.5 rounded-full ${
                  user?.isVerified ? "bg-green-500" : "bg-destructive"
                }`}
              />
              <span className="text-sm text-foreground">
                {user?.isVerified ? "Email Verified" : "Email Not Verified"}
              </span>
            </div>
            {user?.createdAt && (
              <p className="text-xs text-muted-foreground mt-2">
                Member since {new Date(user.createdAt).toLocaleDateString()}
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function ProfileField({ label, value }: { label: string; value?: string }) {
  return (
    <div className="flex items-start justify-between text-sm">
      <span className="text-muted-foreground">{label}</span>
      <span className="text-foreground font-medium text-right">{value || "—"}</span>
    </div>
  );
}
