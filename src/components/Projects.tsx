import React from 'react';
import { Code, Globe } from 'lucide-react';

export default function Projects() {
  return (
    <section className="py-20 bg-black/90">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white mb-12">Featured Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* IVR Project */}
          <div className="bg-black/50 p-8 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-4">Interactive Voice Response System</h3>
            <p className="text-gray-400 mb-4">
              Lead Information Capture via CallTree Options system that captures user inputs via DTMF tones, handled by Twilio. Automated lead qualification flows with scoring algorithms.
            </p>
            <div className="flex gap-4 text-sm text-gray-500">
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>Twilio</span>
            </div>
          </div>

          {/* PollSync Project */}
          <div className="bg-black/50 p-8 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-4">PollSync - Scheduled/Cron Jobs</h3>
            <p className="text-gray-400 mb-4">
              Customizable Polling Intervals, Efficient Resource Management, Error Handling & Retries, Real-time Sync Capabilities, Dynamic Workload Balancing.
            </p>
            <div className="flex gap-4 text-sm text-gray-500">
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>Redis</span>
            </div>
          </div>

          {/* UIF Project */}
          <div className="bg-black/50 p-8 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-4">Universal Integration Framework</h3>
            <p className="text-gray-400 mb-4">
              Created a multi-client onboarding solution that integrates various CRM and PMS platforms for seamless data synchronization and operational efficiency.
            </p>
            <div className="flex gap-4 text-sm text-gray-500">
              <span>TypeScript</span>
              <span>Node.js</span>
              <span>MongoDB</span>
            </div>
          </div>

          {/* Vehicle Tracking System */}
          <div className="bg-black/50 p-8 rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-4">Vehicle Tracking System</h3>
            <p className="text-gray-400 mb-4">
              Developed a scalable vehicle tracking system using Node.js, Express.js, PostgreSQL, and GPS tracking integration for real-time monitoring of vehicles.
            </p>
            <div className="flex gap-4 text-sm text-gray-500">
              <span>Node.js</span>
              <span>GraphQL</span>
              <span>PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}