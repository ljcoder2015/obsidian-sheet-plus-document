<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  href: string;
  filename?: string;
  type?: string;
  size?: string;
}>();

const fileType = computed(() => {
  if (props.type) return props.type;
  const ext = props.href.split(".").pop()?.toLowerCase();
  const types: Record<string, string> = {
    pdf: "PDF",
    doc: "Word",
    docx: "Word",
    xls: "Excel",
    xlsx: "Excel",
    zip: "ZIP",
    rar: "RAR",
    tar: "TAR",
    gz: "GZIP",
    md: "Markdown",
    txt: "Text",
    json: "JSON",
    csv: "CSV",
  };
  return types[ext || ""] || "File";
});

const isAbsoluteUrl = (url: string): boolean => {
  return /^https?:\/\//i.test(url);
};

const handleDownload = () => {
  const link = document.createElement("a");
  link.href = props.href;
  link.download = props.filename || props.href.split("/").pop() || "download";
  
  if (isAbsoluteUrl(props.href)) {
    link.target = "_blank";
    link.rel = "noopener noreferrer";
  }
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
</script>

<template>
  <div
    class="download-container"
    @click="handleDownload"
    role="button"
    tabindex="0"
    @keydown.enter="handleDownload"
    @keydown.space="handleDownload"
  >
    <div class="download-icon">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
      </svg>
    </div>
    <div class="download-info">
      <div class="download-filename">
        {{ filename || href.split("/").pop() }}
      </div>
      <div class="download-meta">
        <span class="download-type">{{ fileType }}</span>
        <span v-if="size" class="download-size">{{ size }}</span>
      </div>
    </div>
    <div class="download-arrow">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </div>
  </div>
</template>

<style scoped lang="scss">
.download-container {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8ec 100%);
  border-radius: 12px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover {
    background: linear-gradient(135deg, #e8eaed 0%, #d0d4da 100%);
    border-color: #c0c4cc;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  &:active {
    transform: translateY(0);
  }
}

.download-icon {
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  color: #fff;
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
  }
}

.download-info {
  flex: 1;
  min-width: 0;
}

.download-filename {
  font-weight: 600;
  font-size: 15px;
  color: #1a1a1a;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.download-meta {
  display: flex;
  gap: 12px;
  margin-top: 4px;
  font-size: 13px;
  color: #666;
}

.download-type {
  padding: 2px 8px;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  border-radius: 4px;
}

.download-size {
  opacity: 0.7;
}

.download-arrow {
  color: #999;
  transition: color 0.3s ease;

  svg {
    width: 20px;
    height: 20px;
  }
}

.download-container:hover .download-arrow {
  color: #667eea;
}
</style>
