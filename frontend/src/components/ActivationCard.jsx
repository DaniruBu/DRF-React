import React from 'react'
import { Card, Result, Button } from 'antd'
import { CheckCircleOutlined, CloseCircleOutlined, LoadingOutlined } from '@ant-design/icons'

const ActivationCard = ({ 
  status = 'loading', 
  title, 
  message, 
  onSuccessAction, 
  onErrorAction,
  successButtonText = 'Продолжить',
  errorButtonText = 'Попробовать снова'
}) => {
  const renderContent = () => {
    switch (status) {
      case 'loading':
        return (
          <Result
            icon={<LoadingOutlined />}
            title="Загрузка..."
            subTitle="Пожалуйста, подождите"
          />
        );
      
      case 'success':
        return (
          <Result
            status="success"
            icon={<CheckCircleOutlined />}
            title={title || "Операция выполнена успешно!"}
            subTitle={message}
            extra={[
              <Button 
                type="primary" 
                key="success" 
                onClick={onSuccessAction}
                className="w-full"
              >
                {successButtonText}
              </Button>
            ]}
          />
        );
      
      case 'error':
        return (
          <Result
            status="error"
            icon={<CloseCircleOutlined />}
            title={title || "Произошла ошибка"}
            subTitle={message}
            extra={[
              <Button 
                type="primary" 
                key="error" 
                onClick={onErrorAction}
                className="w-full"
              >
                {errorButtonText}
              </Button>
            ]}
          />
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="card-detail-container">
      <Card>
        {renderContent()}
      </Card>
    </div>
  )
}

export default ActivationCard

