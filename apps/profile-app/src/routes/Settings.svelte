<script lang="ts">
  import { onMount } from 'svelte';
  import { api } from '../lib/api';

  let name = $state('');
  let username = $state('');
  let email = $state('');
  let bio = $state('');
  let location = $state('');
  let website = $state('');
  let saved = $state(false);
  let loading = $state(true);

  onMount(async () => {
    try {
      let data;
      try {
        data = await api.getUserProfile();
      } catch (fetchErr) {
        console.warn('API fetch failed:', fetchErr);
      }
      
      if (data?.success && data?.data?.user) {
        const user = data.data.user;
        name = user.name || '';
        username = user.username || '';
        email = user.email || '';
        bio = user.bio || '';
        location = user.location || '';
        website = user.website || '';
      }
    } catch (err) {
      console.error('Error fetching settings profile:', err);
    } finally {
      loading = false;
    }
  });

  let saving = $state(false);
  let saveError = $state('');

  async function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    saving = true;
    saveError = '';
    
    try {
      const payload = { name, username, bio, location, website };
      const { response, data } = await api.updateUserProfile(payload);
      
      if (response.ok && data.success !== false) {
        saved = true;
        setTimeout(() => (saved = false), 2500);
      } else {
        saveError = data.message || 'Failed to update profile';
      }
    } catch (err) {
      saveError = 'An error occurred while saving';
      console.error(err);
    } finally {
      saving = false;
    }
  }
</script>

{#if loading}
  <div class="flex min-h-[50vh] items-center justify-center">
    <div class="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
  </div>
{:else}
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
          disabled
          class="w-full rounded-lg border border-border bg-muted px-3 py-2 text-muted-foreground focus:outline-none cursor-not-allowed opacity-70"
        />
      </div>

      <div>
        <label for="bio" class="mb-1 block text-sm font-medium text-foreground">Bio</label>
        <textarea
          id="bio"
          bind:value={bio}
          rows="3"
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
          {#if saveError}
            <span class="text-sm text-red-600 font-medium">{saveError}</span>
          {/if}
          {#if saved}
            <span class="text-sm text-green-600 font-medium">Changes saved!</span>
          {/if}
          <button
            type="submit"
            disabled={saving}
            class="flex items-center gap-2 rounded-lg bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {#if saving}
              <div class="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent"></div>
              Saving...
            {:else}
              Save Changes
            {/if}
          </button>
        </div>
      </div>
    </form>
  </section>
{/if}
