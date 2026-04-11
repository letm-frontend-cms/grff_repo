<script lang="ts">
  import { MOCK_PROFILE } from '../lib/mock-data';

  let name = $state(MOCK_PROFILE.name);
  let username = $state(MOCK_PROFILE.username);
  let email = $state(MOCK_PROFILE.email);
  let bio = $state(MOCK_PROFILE.bio);
  let location = $state(MOCK_PROFILE.location);
  let website = $state(MOCK_PROFILE.website);
  let saved = $state(false);

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    saved = true;
    setTimeout(() => (saved = false), 2500);
  }
</script>

<section>
  <div class="mb-6">
    <h1 class="text-2xl font-bold text-foreground">Profile Settings</h1>
    <p class="text-muted-foreground">Update your personal information and preferences.</p>
  </div>

  <form onsubmit={handleSubmit} class="space-y-5 rounded-xl border border-border bg-surface p-6">
    <div class="grid gap-5 sm:grid-cols-2">
      <div>
        <label for="name" class="mb-1 block text-sm font-medium text-foreground">Full Name</label>
        <input
          id="name"
          type="text"
          bind:value={name}
          class="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label for="username" class="mb-1 block text-sm font-medium text-foreground">Username</label>
        <input
          id="username"
          type="text"
          bind:value={username}
          class="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
    </div>

    <div>
      <label for="email" class="mb-1 block text-sm font-medium text-foreground">Email</label>
      <input
        id="email"
        type="email"
        bind:value={email}
        class="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>

    <div>
      <label for="bio" class="mb-1 block text-sm font-medium text-foreground">Bio</label>
      <textarea
        id="bio"
        bind:value={bio}
        rows={3}
        class="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
      ></textarea>
    </div>

    <div class="grid gap-5 sm:grid-cols-2">
      <div>
        <label for="location" class="mb-1 block text-sm font-medium text-foreground">Location</label>
        <input
          id="location"
          type="text"
          bind:value={location}
          class="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label for="website" class="mb-1 block text-sm font-medium text-foreground">Website</label>
        <input
          id="website"
          type="url"
          bind:value={website}
          class="w-full rounded-lg border border-border bg-background px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
    </div>

    <div class="flex items-center justify-between border-t border-border pt-4">
      <a href="/#/" class="text-sm text-muted-foreground hover:text-foreground transition-colors">
        &larr; Back to profile
      </a>
      <div class="flex items-center gap-3">
        {#if saved}
          <span class="text-sm text-green-600 font-medium">Changes saved!</span>
        {/if}
        <button
          type="submit"
          class="rounded-lg bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Save Changes
        </button>
      </div>
    </div>
  </form>
</section>
