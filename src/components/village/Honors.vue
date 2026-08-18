<template>
  <div class="honors">
    <el-tabs v-model="activeTab" class="honors__tabs">
      <el-tab-pane label="Village Honors" name="village">
        <div class="honors__grid">
          <div
            v-for="honor in villageHonors"
            :key="honor.title"
            class="honors__card"
            @click="openModal(honor)"
          >
            <div class="honors__card-icon">
              <el-icon :size="28"><component :is="honor.icon" /></el-icon>
            </div>
            <div class="honors__card-body">
              <h4>{{ honor.title }}</h4>
              <p class="honors__card-cn">{{ honor.titleCN }}</p>
              <span class="honors__level" :class="`honors__level--${honor.level.toLowerCase()}`">{{ honor.level }}</span>
              <span v-if="honor.year" class="honors__year">{{ honor.year }}</span>
            </div>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane label="Leader Honors" name="leader">
        <div class="honors__leader-intro">
          <div class="honors__leader-avatar">
            <el-icon :size="48"><UserFilled /></el-icon>
          </div>
          <div>
            <h3>Chang Desheng (常德盛)</h3>
            <p>First Secretary of Jiangxiang Village Party Committee</p>
            <p class="honors__leader-quote">"I want what benefits farmers long-term; what earns their understanding and recognition of a Party member's commitment."</p>
          </div>
        </div>
        <div class="honors__grid">
          <div
            v-for="honor in leaderHonors"
            :key="honor.title"
            class="honors__card honors__card--leader"
            @click="openModal(honor)"
          >
            <div class="honors__card-icon honors__card-icon--gold">
              <el-icon :size="28"><Trophy /></el-icon>
            </div>
            <div class="honors__card-body">
              <h4>{{ honor.title }}</h4>
              <p class="honors__card-cn">{{ honor.titleCN }}</p>
              <span class="honors__level honors__level--national">{{ honor.level }}</span>
              <p class="honors__card-desc">{{ honor.desc }}</p>
            </div>
          </div>
        </div>
      </el-tab-pane>

      <el-tab-pane label="Leadership Visits" name="visits">
        <div class="honors__visits">
          <div v-for="visit in visits" :key="visit.leader" class="honors__visit-card">
            <div class="honors__visit-year">{{ visit.year }}</div>
            <div class="honors__visit-body">
              <h4>{{ visit.leader }}</h4>
              <p class="honors__visit-cn">{{ visit.leaderCN }}</p>
              <blockquote class="honors__quote">"{{ visit.quote }}"</blockquote>
            </div>
          </div>
        </div>
      </el-tab-pane>
    </el-tabs>

    <el-dialog v-model="modalVisible" :title="selectedHonor?.title" width="500">
      <div v-if="selectedHonor" class="honors__modal">
        <div class="honors__modal-icon">
          <el-icon :size="48"><component :is="selectedHonor.icon || 'Trophy'" /></el-icon>
        </div>
        <h3>{{ selectedHonor.titleCN }}</h3>
        <span class="honors__level" :class="`honors__level--${(selectedHonor.level || '').toLowerCase()}`">{{ selectedHonor.level }}</span>
        <p>{{ selectedHonor.desc }}</p>
      </div>
    </el-dialog>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { UserFilled, Trophy } from '@element-plus/icons-vue'

defineProps({
  villageHonors: { type: Array, required: true },
  leaderHonors: { type: Array, required: true },
  visits: { type: Array, required: true }
})

const activeTab = ref('village')
const modalVisible = ref(false)
const selectedHonor = ref(null)

const openModal = (honor) => {
  selectedHonor.value = honor
  modalVisible.value = true
}
</script>

<style scoped lang="scss">
.honors {
  &__tabs {
    :deep(.el-tabs__item) {
      font-size: 1rem;
      font-weight: 500;
    }
    :deep(.el-tabs__active-hash) {
      background-color: #1f6d3d;
    }
  }

  &__grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1rem;
    margin-top: 1.5rem;
  }

  &__card {
    display: flex;
    gap: 1rem;
    padding: 1.25rem;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    cursor: pointer;
    transition: all 0.25s;
    border-left: 4px solid #1f6d3d;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
    }

    &--leader {
      border-left-color: #d4a017;
    }
  }

  &__card-icon {
    width: 56px;
    height: 56px;
    border-radius: 12px;
    background: #dcf2e3;
    color: #1f6d3d;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    &--gold {
      background: #fef3c7;
      color: #d4a017;
    }
  }

  &__card-body h4 {
    font-size: 0.95rem;
    color: #333;
    margin-bottom: 2px;
  }

  &__card-cn {
    font-size: 0.8rem;
    color: #9ca3af;
    margin-bottom: 0.5rem;
  }

  &__card-desc {
    font-size: 0.8rem;
    color: #6b7280;
    margin-top: 0.5rem;
    line-height: 1.5;
  }

  &__level {
    display: inline-block;
    font-size: 0.7rem;
    padding: 2px 8px;
    border-radius: 10px;
    margin-right: 0.5rem;
    font-weight: 600;

    &--national {
      background: #dbeafe;
      color: #1d4ed8;
    }
    &--provincial {
      background: #dcf2e3;
      color: #1f6d3d;
    }
    &--international {
      background: #fef3c7;
      color: #b45309;
    }
  }

  &__year {
    font-size: 0.75rem;
    color: #9ca3af;
  }

  &__leader-intro {
    display: flex;
    gap: 1.5rem;
    align-items: center;
    background: linear-gradient(135deg, #f0f9f4, #dcf2e3);
    padding: 1.5rem;
    border-radius: 12px;
    margin-bottom: 1.5rem;

    h3 {
      color: #1f6d3d;
      font-size: 1.2rem;
    }

    p {
      color: #6b7280;
      font-size: 0.85rem;
      margin-top: 2px;
    }
  }

  &__leader-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #1f6d3d;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  &__leader-quote {
    font-style: italic;
    color: #4b5563;
    margin-top: 0.5rem;
    font-size: 0.85rem;
    line-height: 1.5;
  }

  &__visits {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
  }

  &__visit-card {
    display: flex;
    gap: 1.5rem;
    padding: 1.25rem;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
    align-items: flex-start;
  }

  &__visit-year {
    font-size: 1.5rem;
    font-weight: 800;
    color: #d4a017;
    flex-shrink: 0;
  }

  &__visit-body h4 {
    color: #1f6d3d;
    font-size: 1.05rem;
    margin-bottom: 2px;
  }

  &__visit-cn {
    font-size: 0.85rem;
    color: #9ca3af;
    margin-bottom: 0.5rem;
  }

  &__quote {
    border-left: 3px solid #88cf9f;
    padding-left: 1rem;
    font-size: 0.9rem;
    color: #4b5563;
    font-style: italic;
    line-height: 1.6;
  }

  &__modal {
    text-align: center;

    &-icon {
      width: 96px;
      height: 96px;
      border-radius: 50%;
      background: #dcf2e3;
      color: #1f6d3d;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1rem;
    }

    h3 {
      color: #1f6d3d;
      margin-bottom: 0.5rem;
    }

    p {
      color: #4b5563;
      line-height: 1.6;
      margin-top: 1rem;
    }
  }
}
</style>
