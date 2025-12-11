import { useState } from 'react';
import SettingsSection from '../components/SettingsSection';
import Checkbox from '../components/Checkbox';
import Toggle from '../components/Toggle';
import RadioGroup from '../components/RadioGroup';

interface RepoConfig {
  frameworks: {
    react: boolean;
    angular: boolean;
    plainHtml: boolean;
    other: boolean;
  };
  features: {
    ideChecks: boolean;
    prChecks: boolean;
    ciJob: boolean;
  };
  gateMode: 'report-only' | 'blocking-must-fix';
  severities: {
    mustFix: boolean;
    warning: boolean;
  };
  telemetry: {
    sendMetrics: boolean;
  };
}

export default function RepoSettings() {
  const [config, setConfig] = useState<RepoConfig>({
    frameworks: {
      react: true,
      angular: false,
      plainHtml: false,
      other: false,
    },
    features: {
      ideChecks: true,
      prChecks: true,
      ciJob: false,
    },
    gateMode: 'report-only',
    severities: {
      mustFix: true,
      warning: false,
    },
    telemetry: {
      sendMetrics: true,
    },
  });

  // Helper to update nested config
  const updateFramework = (framework: keyof typeof config.frameworks, value: boolean) => {
    setConfig((prev) => ({
      ...prev,
      frameworks: { ...prev.frameworks, [framework]: value },
    }));
  };

  const updateFeature = (feature: keyof typeof config.features, value: boolean) => {
    setConfig((prev) => ({
      ...prev,
      features: { ...prev.features, [feature]: value },
    }));
  };

  const updateSeverity = (severity: keyof typeof config.severities, value: boolean) => {
    setConfig((prev) => ({
      ...prev,
      severities: { ...prev.severities, [severity]: value },
    }));
  };

  // Generate summary line
  const getSummary = () => {
    const parts: string[] = [];

    // Mode
    parts.push(config.gateMode === 'report-only' ? 'Report-only' : 'Blocking on must-fix');

    // Features
    const activeFeatures = [];
    if (config.features.ideChecks) activeFeatures.push('IDE');
    if (config.features.prChecks) activeFeatures.push('PR');
    if (activeFeatures.length > 0) {
      parts.push(`${activeFeatures.join(' + ')} checks enabled`);
    }

    // Frameworks
    const activeFrameworks = Object.entries(config.frameworks)
      .filter(([_, enabled]) => enabled)
      .map(([name]) => name.charAt(0).toUpperCase() + name.slice(1));
    if (activeFrameworks.length > 0) {
      parts.push(`${activeFrameworks.join(', ')} adapter${activeFrameworks.length > 1 ? 's' : ''} active`);
    }

    return parts.join(', ');
  };

  return (
    <div className="h-full overflow-auto bg-white">
      <div className="max-w-4xl mx-auto p-8">
        {/* Page Title */}
        <h1 className="text-2xl font-semibold text-gray-900 mb-8">
          Repo settings – stats.mom.gov.sg
        </h1>

        {/* Section 1: Scan Configuration */}
        <SettingsSection title="Scan configuration">
          <div className="space-y-4">
            {/* Framework Selector */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Framework (multi-select)
              </label>
              <div className="space-y-1">
                <Checkbox
                  label="React"
                  checked={config.frameworks.react}
                  onChange={(checked) => updateFramework('react', checked)}
                />
                <Checkbox
                  label="Angular"
                  checked={config.frameworks.angular}
                  onChange={(checked) => updateFramework('angular', checked)}
                />
                <Checkbox
                  label="Plain HTML"
                  checked={config.frameworks.plainHtml}
                  onChange={(checked) => updateFramework('plainHtml', checked)}
                />
                <Checkbox
                  label="Other (detect-only)"
                  checked={config.frameworks.other}
                  onChange={(checked) => updateFramework('other', checked)}
                />
              </div>
            </div>

            {/* Feature Toggles */}
            <div className="pt-4 space-y-2 border-t border-gray-200">
              <Toggle
                label="Enable IDE inline checks"
                checked={config.features.ideChecks}
                onChange={(checked) => updateFeature('ideChecks', checked)}
              />
              <Toggle
                label="Enable PR diff checks"
                checked={config.features.prChecks}
                onChange={(checked) => updateFeature('prChecks', checked)}
              />
              <Toggle
                label="Run CI job on push"
                checked={config.features.ciJob}
                onChange={(checked) => updateFeature('ciJob', checked)}
              />
            </div>
          </div>
        </SettingsSection>

        {/* Section 2: Gates & Policies */}
        <SettingsSection title="Gates & policies">
          <div className="space-y-4">
            {/* Mode Radio */}
            <div>
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Mode
              </label>
              <RadioGroup
                options={[
                  { value: 'report-only', label: 'Report-only' },
                  { value: 'blocking-must-fix', label: 'Blocking on must-fix only' },
                ]}
                value={config.gateMode}
                onChange={(value) =>
                  setConfig((prev) => ({
                    ...prev,
                    gateMode: value as RepoConfig['gateMode'],
                  }))
                }
              />
            </div>

            {/* Severity Selection */}
            <div className="pt-4 border-t border-gray-200">
              <label className="block text-sm font-medium text-gray-900 mb-2">
                Severity selection (multi-select)
              </label>
              <div className="space-y-1">
                <Checkbox
                  label="Must-fix (default selected)"
                  checked={config.severities.mustFix}
                  onChange={(checked) => updateSeverity('mustFix', checked)}
                />
                <Checkbox
                  label="Warning"
                  checked={config.severities.warning}
                  onChange={(checked) => updateSeverity('warning', checked)}
                />
              </div>
            </div>

            {/* Summary Line */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 italic">{getSummary()}</p>
            </div>
          </div>
        </SettingsSection>

        {/* Section 3: Telemetry & Data */}
        <SettingsSection title="Telemetry & data">
          <div className="space-y-4">
            {/* Info Block */}
            <div className="p-4 bg-gray-50 border border-gray-200">
              <p className="text-sm text-gray-900 mb-2">
                Source code is not used to train shared models.
              </p>
              <p className="text-sm text-gray-900">
                Only minimal, aggregated telemetry leaves this environment.
              </p>
            </div>

            {/* Toggle */}
            <Toggle
              label="Send anonymous usage metrics"
              checked={config.telemetry.sendMetrics}
              onChange={(checked) =>
                setConfig((prev) => ({
                  ...prev,
                  telemetry: { sendMetrics: checked },
                }))
              }
            />
          </div>
        </SettingsSection>

        {/* Section 4: Debug Panel */}
        <div>
          <h2 className="text-base font-semibold text-gray-900 mb-4">Debug panel</h2>
          <div className="p-4 bg-gray-50 border border-gray-200 font-mono text-xs overflow-auto">
            <pre className="text-gray-900">{JSON.stringify(config, null, 2)}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}
