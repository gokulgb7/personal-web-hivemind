import React, { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, BarChart3, PieChart, DollarSign, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TraderProfile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const strategies = [
    { icon: <TrendingUp className="w-6 h-6" />, name: "Technical Analysis", success: 85 },
    { icon: <BarChart3 className="w-6 h-6" />, name: "Swing Trading", success: 78 },
    { icon: <PieChart className="w-6 h-6" />, name: "Portfolio Management", success: 92 },
    { icon: <DollarSign className="w-6 h-6" />, name: "Risk Management", success: 88 }
  ];

  const achievements = [
    {
      title: "Consistent Returns",
      description: "Maintained positive returns for 18 consecutive months",
      metric: "+24% Annual Return"
    },
    {
      title: "Risk Management",
      description: "Maximum drawdown kept under 5% through disciplined approach",
      metric: "3.2% Max Drawdown"
    },
    {
      title: "Portfolio Growth",
      description: "Successfully managed and grew multiple investment portfolios",
      metric: "$500K+ Managed"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-50 via-white to-emerald-50">
          <div className="container mx-auto px-4">
            <Button 
              variant="outline" 
              onClick={() => navigate('/')}
              className="mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
            
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center">
                <TrendingUp className="w-12 h-12 text-white" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Stock Market Trader
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Experienced in analyzing market trends and executing strategic trades to maximize returns 
                while minimizing risks. Specialized in technical analysis and portfolio optimization.
              </p>
            </div>
          </div>
        </section>

        {/* Trading Strategies */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Trading Expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {strategies.map((strategy, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="text-green-600 flex justify-center mb-2">
                      {strategy.icon}
                    </div>
                    <CardTitle className="text-lg">{strategy.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div 
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${strategy.success}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600">{strategy.success}% Success Rate</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Trading Achievements</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {achievements.map((achievement, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-green-600">{achievement.metric}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-gray-800">
                      {achievement.title}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{achievement.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TraderProfile;
